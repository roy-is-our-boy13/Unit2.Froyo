
const froyo = {
    flavor: ["Vanilla", "Strawberry", "Coffee", "Birthday Cake", "Chocolate"],
    size: ["Large", "Medium", "Small"]
}

console.log(Object.keys(froyo));
console.log(Object.values(froyo));

function displayTable(object)
{
    
}

const userInputOnFroyoFlavor = prompt(
    "Please enter the froyo flavors you would like to order, separated by commas.",
    "Vanilla,vanilla,vanilla,strawberry,coffee,coffee,Birthday cAke,Birthday Cake"
  );
  
  const lowercaseInputOnFroyoFlavor = userInputOnFroyoFlavor.toLowerCase();

  console.log(lowercaseInputOnFroyoFlavor);

  const stringArrayOfFroyoFlavors = lowercaseInputOnFroyoFlavor.split(",");

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