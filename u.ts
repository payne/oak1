import {
  BlobReader,
  BlobWriter,
  ZipReader,
} from "https://deno.land/x/zipjs@v2.7.40/index.js";

async function extractZip(zipPath: string, outputDir: string) {
  try {
    // Read the zip file as a blob
    const zipData = await Deno.readFile(zipPath);
    const zipBlob = new Blob([zipData]);

    // Create the zip reader
    const reader = new BlobReader(zipBlob);
    const zipReader = new ZipReader(reader);

    // Create output directory if it doesn't exist
    try {
      await Deno.mkdir(outputDir, { recursive: true });
    } catch (error) {
      if (!(error instanceof Deno.errors.AlreadyExists)) {
        throw error;
      }
    }

    // Get all entries
    const entries = await zipReader.getEntries();

    // Extract each entry
    for (const entry of entries) {
      const filepath = `${outputDir}/${entry.filename}`;

      if (entry.directory) {
        await Deno.mkdir(filepath, { recursive: true });
      } else {
        // Ensure parent directory exists
        const parentDir = filepath.substring(0, filepath.lastIndexOf("/"));
        await Deno.mkdir(parentDir, { recursive: true });

        // Write file
        const writer = new BlobWriter();
        const blob = await entry?.getData(writer);
        const arrayBuffer = await blob.arrayBuffer();
        await Deno.writeFile(filepath, new Uint8Array(arrayBuffer));
      }
    }

    // Close the zip reader
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
