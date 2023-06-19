// Ханойская башня
// Имеется три стержня — левый, средний и правый. На левом стержне находятся n дисков, диаметры которых различны. 
// Диски упорядочены по размеру диаметра, сверху лежит наименьший, снизу — наибольший. 
// Требуется перенести диски с левого стержня на правый, используя средний стержень как вспомогательный.
// Головоломка имеет следующие два правила:
// Вы не можете поместить больший диск на меньший диск.
// За один раз можно перемещать только один диск.


// Рекурсивный подход

function hanoiRecursive(n, source, auxiliary, target) {
    if (n === 1) {
      moveDisk(source, target);
    } else {
      hanoiRecursive(n - 1, source, target, auxiliary);
      moveDisk(source, target);
      hanoiRecursive(n - 1, auxiliary, source, target);
    }
  }
  
  function moveDisk(source, target) {
    console.log(`Move disk from ${source} to ${target}`);
  }
  
  const n = 3; 
  hanoiRecursive(n, "Left", "Middle", "Right");
  

// Итеративный подход

function hanoiIterative(n, source, auxiliary, target) {
    if (n % 2 === 0) {
      [auxiliary, target] = [target, auxiliary];
    }
  
    const totalMoves = 2 ** n - 1;
  
    for (let move = 1; move <= totalMoves; move++) {
      if (move % 3 === 1) {
        moveDisk(source, target);
      } else if (move % 3 === 2) {
        moveDisk(source, auxiliary);
      } else if (move % 3 === 0) {
        moveDisk(auxiliary, target);
      }
    }
  }
  
  function moveDisk(source, target) {
    console.log(`Move disk from ${source} to ${target}`);
  }
  
  const m = 3;
  hanoiIterative(m, "Left", "Middle", "Right");
  
