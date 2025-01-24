import {
  BlobReader,
  BlobWriter,
  ZipReader,
} from "https://deno.land/x/zipjs@v2.7.40/index.js";

async function extractZip(zipPath: string, outputDir: string) {
  try {
    // Read the bundled zip file
    const zipData = Deno.readFileSync(new URL(zipPath, import.meta.url));
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
        const parentDir = filepath.substring(0, filepath.lastIndexOf("/"));
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

// Usage - note that we need to use the full path that matches how Deno bundles included files
const zipPath = "file:///$deno$/file.zip";
const outputDir = "/tmp/zout";
await extractZip(zipPath, outputDir);
