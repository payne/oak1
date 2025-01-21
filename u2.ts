import { ZipReader, BlobReader, BlobWriter } from "https://deno.land/x/zipjs@v2.7.40/index.js";

async function extractZip(zipPath: string, outputDir: string) {
  try {
    // Try current directory first, then try relative to executable
    let zipData: Uint8Array;
    try {
      zipData = await Deno.readFile(zipPath);
    } catch (error) {
      // If file not found in current directory, try executable directory
      const execPath = Deno.execPath();
      const execDir = execPath.substring(0, execPath.lastIndexOf('/'));
      zipData = await Deno.readFile(`${execDir}/${zipPath}`);
    }
    
    const zipBlob = new Blob([zipData]);
    const reader = new BlobReader(zipBlob);
    const zipReader = new ZipReader(reader);
    
    try {
      await Deno.mkdir(outputDir, { recursive: true });
    } catch (error) {
      if (!(error instanceof Deno.errors.AlreadyExists)) {
        throw error;
      }
    }

    const entries = await zipReader.getEntries();
    
    for (const entry of entries) {
      const filepath = `${outputDir}/${entry.filename}`;
      
      if (entry.directory) {
        await Deno.mkdir(filepath, { recursive: true });
      } else {
        const parentDir = filepath.substring(0, filepath.lastIndexOf('/'));
        await Deno.mkdir(parentDir, { recursive: true });
        
        const writer = new BlobWriter();
        const blob = await entry?.getData(writer);
        const arrayBuffer = await blob.arrayBuffer();
        await Deno.writeFile(filepath, new Uint8Array(arrayBuffer));
      }
    }
    
    await zipReader.close();
    
    console.log(`Successfully extracted to ${outputDir}`);
  } catch (error) {
    console.error("Error extracting zip:", error);
    throw error;
  }
}

// Usage
const zipPath = "file.zip";
const outputDir = "/tmp/zout";
await extractZip(zipPath, outputDir);

