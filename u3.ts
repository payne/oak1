import { ensureDir } from "https://deno.land/std@0.208.0/fs/ensure_dir.ts";
import { join } from "https://deno.land/std@0.208.0/path/join.ts";
import * as path from "https://deno.land/std@0.208.0/path/mod.ts";
import { decompress } from "https://deno.land/x/zip@v1.2.5/mod.ts";

if (Deno.args.length !== 1) {
  console.error("Please provide a URL to the ZIP file");
  console.error(
    "Usage: deno run --allow-net --allow-write --allow-read u3.ts <url>",
  );
  Deno.exit(1);
}

const url = Deno.args[0];
const outputDir = "/tmp/zout";
const tempFile = "/tmp/temp.zip";

try {
  // Create the output directory if it doesn't exist
  await ensureDir(outputDir);

  // Download the ZIP file
  console.log(`Downloading ZIP from ${url}...`);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(
      `Failed to download: ${response.status} ${response.statusText}`,
    );
  }

  // Save the ZIP file temporarily
  const data = new Uint8Array(await response.arrayBuffer());
  await Deno.writeFile(tempFile, data);

  // Extract the ZIP contents
  console.log("Extracting ZIP contents...");
  const files = await decompress(tempFile, outputDir);

  // Log extracted files
  for (const file of files) {
    console.log(`Extracted: ${file}`);
  }

  // Clean up the temporary file
  await Deno.remove(tempFile);

  console.log(`\nExtraction complete! Files are in ${outputDir}`);
} catch (error) {
  console.error("Error:", error.message);
  // Clean up temp file if it exists
  try {
    await Deno.remove(tempFile);
  } catch {
    // Ignore cleanup errors
  }
  Deno.exit(1);
}
