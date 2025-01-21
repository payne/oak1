import { ensureDir } from "https://deno.land/std/fs/mod.ts";
import { join } from "https://deno.land/std/path/mod.ts";
import { unZipFromURL } from "https://deno.land/x/unzip@v0.3.0/mod.ts";

if (Deno.args.length !== 1) {
  console.error("Please provide a URL to the ZIP file");
  console.error("Usage: deno run --allow-net --allow-write --allow-read unzip.ts <url>");
  Deno.exit(1);
}

const url = Deno.args[0];
const outputDir = "/tmp/zout";

// Create the output directory if it doesn't exist
await ensureDir(outputDir);

try {
  // Download and extract the ZIP file
  console.log(`Downloading and extracting ZIP from ${url}...`);
  try {
    await unZipFromURL(url, {
      destinationDir: outputDir,
    });
    console.log("Extraction complete!");
  }
  
  console.log(`\nExtraction complete! Files are in ${outputDir}`);

} catch (error) {
  console.error("Error:", error.message);
  Deno.exit(1);
}
