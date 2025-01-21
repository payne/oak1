import { ensureDir } from "https://deno.land/std/fs/mod.ts";
import { join } from "https://deno.land/std/path/mod.ts";
import { Unzip } from "https://deno.land/x/zip/mod.ts";

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
  // Download the ZIP file
  console.log(`Downloading ZIP from ${url}...`);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download: ${response.status} ${response.statusText}`);
  }
  
  const zipData = new Uint8Array(await response.arrayBuffer());
  
  // Extract the ZIP contents
  console.log("Extracting ZIP contents...");
  const zip = new Unzip(zipData);
  
  for await (const entry of zip.entries()) {
    const fullPath = join(outputDir, entry.filename);
    
    if (entry.isDirectory) {
      await ensureDir(fullPath);
    } else {
      // Create parent directory if it doesn't exist
      await ensureDir(join(fullPath, ".."));
      
      // Extract file
      const content = await entry.read();
      await Deno.writeFile(fullPath, content);
      console.log(`Extracted: ${entry.filename}`);
    }
  }
  
  console.log(`\nExtraction complete! Files are in ${outputDir}`);

} catch (error) {
  console.error("Error:", error.message);
  Deno.exit(1);
}

