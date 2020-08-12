import {
  StringManipulationService,
  NumberManipulationService,
} from "./main-service";

class StringManipulations implements StringManipulationService {
  print(word: string): void {
    console.log(word);
    console.log(word.toUpperCase());
    console.log(word.toLowerCase());
    console.log(word.charAt(5));
    let word1 = "PROGRAD";
    console.log(word.concat("FACEPREP"));
    let wslice = word.slice(2, 5);
    console.log(wslice);
    console.log(word.length);
  }
  printWithSpace(sentence: string): void {
    console.log(sentence.split(" ").join(" "));
  }
  findVowel(str: string): void {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
      if (
        str[i].toLowerCase() == "a" ||
        str[i].toLowerCase() == "e" ||
        str[i].toLowerCase() == "i" ||
        str[i].toLowerCase() == "o" ||
        str[i].toLowerCase() == "u"
      ) {
        count++;
      }
    }
    console.log(count);
  }
}

class NumbersManipulations implements NumberManipulationService {
  findPrime(num: number): void {
    var flag: boolean = false;
    for (var i = 2; i < num / 2; i++) {
      if (num % i === 0) {
        console.log("PRIME");
      }
    }
    console.log("NOT A PRIME");
  }

  findMagic(num: number): void {
    var sum: number = 0;
    while (num != 0) {
      sum += num % 10;
      num = num / 10;
    }
    if (sum == 1) {
      console.log("MAGIC NUMBER");
    } else {
      console.log("NOT A MAGIC NUMBER");
    }
  }
}

var name = "sai";
var obj1 = new StringManipulations();
obj1.print(name);
obj1.printWithSpace(name);
obj1.findVowel(name);

var num = 199;
var obj2 = new NumbersManipulations();
obj2.findPrime(num);
obj2.findMagic(num);
