// Java: Exception
// JavaScript: Error

// Error(Exception) Handling: try -> catch -> finally
function readFile(fileName: string): string {
  if (fileName === 'not exist π©') {
    throw new Error(`file not exist! ${fileName}`);
  }
  return 'file contents π';
}

function closeFile(fileName: string) {}

function run() {
  const fileName = 'not exist π©';

  try {
    //μλ¬κ° λ°μν  μ μλ λΆλΆμ try/catch μμ±
    console.log(readFile(fileName));
  } catch (error) {
    console.log(`catched!!`);
  } finally {
    closeFile(fileName);
    console.log(`finally!!`);
  }
}
run();
