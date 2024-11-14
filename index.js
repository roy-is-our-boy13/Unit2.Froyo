/**
 * Some unnecessary lines of code are needed for Block 15 Workshop: Froyo Orders, but gaining hands-on 
 * experience with them helped me get a good start on the workshop.
 */
const froyo = {
    flavor: ["Vanilla", "Strawberry", "Coffee", "Birthday Cake", "Chocolate"],
    size: ["Large", "Medium", "Small"]
}

console.log(Object.keys(froyo));
console.log(Object.values(froyo));
console.log(froyo);

function displayTable(object)
{
    for(const key in object)
    {
        console.log(key +": "+object[key]);
    }
}

displayTable(froyo);

//The primary lines of code for Block 15 Workshop: Froyo Orders.
const userInputOnFroyoFlavor = prompt(
    "Please enter the froyo flavors you would like to order, separated by commas.",
    "Vanilla,vanilla,vanilla,strawberry,coffee,coffee,Birthday cAke,Birthday Cake"
  );
  
  const lowercaseInputOnFroyoFlavor = userInputOnFroyoFlavor.toLowerCase();

  console.log(lowercaseInputOnFroyoFlavor);

  const stringArrayOfFroyoFlavors = lowercaseInputOnFroyoFlavor.split(",");

  //const mainInputOnFroyoFlavor = stringArrayOfFroyoFlavors.map(flavor => flavor.charAt(0).toUpperCase() +  + flavor.slice(1));

  //console.log(mainInputOnFroyoFlavor);

  function flavorAmount(flavors)
  {
    const countingFlavors = {};

    for(const flavor of flavors)
    {
        if(countingFlavors[flavor])
        {
            countingFlavors[flavor]++;
        }
        else
        {
            countingFlavors[flavor] = 1;
        }
    }
    return countingFlavors;
  }

  console.log(flavorAmount(stringArrayOfFroyoFlavors));