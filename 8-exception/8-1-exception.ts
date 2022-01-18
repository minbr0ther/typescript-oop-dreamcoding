// Java: Exception
// JavaScript: Error

// Error(Exception) Handling: try -> catch -> finally
function readFile(fileName: string): string {
  if (fileName === 'not exist 💩') {
    throw new Error(`file not exist! ${fileName}`);
  }
  return 'file contents 📝';
}

function closeFile(fileName: string) {}

function run() {
  const fileName = 'not exist 💩';

  try {
    //에러가 발생할 수 있는 부분에 try/catch 작성
    console.log(readFile(fileName));
  } catch (error) {
    console.log(`catched!!`);
  } finally {
    closeFile(fileName);
    console.log(`finally!!`);
  }
}
run();
