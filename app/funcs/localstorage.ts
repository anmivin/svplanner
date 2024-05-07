enum itemTypes {
    crops = "crops",
    forages = "forages",
    fishes = "fishes",
    minerals = "minerals",
    artisans = "artisans",
    food = "food",
    artifacts = "artifacts",
    loot = "loot",
  }
  
  type itemProps = { [key: string]: number };
  type localStoreTypes = {
    [key in itemTypes]: itemProps;
  };
  const localStore: { items: Partial<localStoreTypes> } = {
    items: {
      crops: {
        kale: 1,
        corn: 20,
      },
    },
  };
  
  const handleChange = (key: itemTypes,item:string, increment?: number, decrement?: number, amount?: number) => {
    if (localStore.items[key]?.[item] === undefined || localStore.items[key]?.[item] === null) return;
    const currentAmmount = localStore.items[key][item] ?? 0;
    if (increment) localStore.items[key][item] = currentAmmount + increment;
    else if (decrement) localStore.items[key][item] = currentAmmount - decrement;
    else localStore.items[key] = amount ?? 0;
  };
  
  const items: { [key: string]: { [key: string]: number } } = {
    crops: {
      kale: 27,
      corn: 3,
    },
    minerals: {
      jade: 3,
      gem: 33,
    },
  };
  
  const toastEnable = (key: string, amount: number) => {
    const toasts: string[] = [];
    Object.keys(items).forEach((item) => {
      if (!!item[key] && item[key] <= amount) {
        const g = items[item];
        toasts.push(Вы можете скрафтить ${item});
      }
    });
  };