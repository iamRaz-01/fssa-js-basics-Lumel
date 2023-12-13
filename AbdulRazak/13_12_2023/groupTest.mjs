import DataSet from "./group.mjs";
let salesData = [
    ["Product", "Sales"],
    ["Milkybar", "200"],
    ["Silk", "400"],
    ["Dairy Milk", "700"],
    ["Eclaires", "800"],
    ["Nesley", "1000"],
    ["Kitkat", "100"],
    ["Five Star", "200"],
    ["Snikkers", "500"],
    ["Munch", "300"],
    ["Perk", "400"],
    ["Center Fresh", "600"],
    ["Mint", "800"],
    ["Polo", "200"],
    ["Tictac", "400"],
    ["Gems", "100"],
    ["Kinder Joy", "900"],
    ["Marbels", "100"],
    ["Melody", "500"],
    ["Mentos", "300"],
    ["Coffee Bite", "200"],
    ["Luvit", "800"],
    ["Kopiko", "1000"],
    ["Kacha Mango", "800"],
    ["Lollipop", "1000"],
  ];
 
  let grpData =  new DataSet(salesData);
  grpData.groupBy(100,300,500,"Sales")
  console.log(grpData.filterByGroup("Group","good"))
  console.log(grpData.rankBy("Sales",10))
