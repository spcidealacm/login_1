window.addEventListener("load", () => {
  {
    let i = 0;
    while (i < 10) {
      console.log('while: ', i);
      i++;
    }

    console.log('=================');

    for (let i = 0; i < 10; i++) {
      console.log('for: ', i);
    }

    console.log('=================');

    const list = [1, 2, 3, 5]


    for (let key in list) {
      console.log(key);
    }

    for (let element of list) {
      console.log(element);
    }

    console.log('=================');

    const user = {
      name: "Raymond",
      age: 30,
      1: 23,
      0: [1, 2, 3]
    }

    for (let key in user) {
      console.log(key);
    }

    console.log(Object.keys(user));
  }

  {
    const list = [45, 56, 67, 78]


    console.log('=================');
    let i = 0
    while (i < list.length) {
      console.log(i);
      console.log(list[i]);
      if (i === 2) {
        break;
        return;
      }
      i++;
    }

    console.log('=================');

    for (let i = 0; i < list.length; i++) {
      console.log(i);
      console.log(list[i]);
      if (i === 2) {
        break;
        return;
      }
    }

    console.log('=================');

    for (let key in list) {
      console.log(key);
      console.log(list[key]);
      if (key === '2') {
        console.log('key === 2');
        break;
        return;
      }
    }

    console.log('=================');

    for (let el of list) {
      console.log(el);
      if (el === 67) {
        break;
        return;
      }
    }

    console.log('=================');

    list.forEach((element, index) => {
      console.log(element);
      console.log(index);
      if (index === 2) {
        // 无法停止遍历
        return
      }
    })

    console.log('=================');

    list.some((element, index) => {
      console.log(element);
      console.log(index);
      if (index === 2) {
        return true
      }
    })

    console.log('=================');

    list.every((element, index) => {
      console.log(element);
      console.log(index);
      if (index === 2) {
        return false
      }
      return true
    })
  }

  {
    const number = 5
    const numberList = [34, 69, 19, 39, 432]
    const numberList2 = [93, 374, 726, 5483]

    let i = 0;
    while (i < numberList.length) {
      console.log(numberList[i] + number);
      i++;
    }
    console.log('=================');

    for (let i = 0; i < numberList.length; i++) {
      console.log(numberList[i] + number);
    }

    console.log('=================');

    for (let key in numberList) {
      console.log(numberList[key] + number);
    }

    console.log('=================');

    for (let el of numberList) {
      console.log(el + number);
    }

    console.log('=================');

    numberList.forEach((el, index) => {
      console.log(el + number);
      console.log(numberList[index] + number);
    })

    console.log('=================');

    console.log(numberList.map(el => el + number));
    numberList.map(el => console.log(el + number));

    console.log('=================');

  }

  {
    const numberList = [34, 69, 19, 39, 432]
    const numberList2 = [93, 374, 726, 5483]

    for (let i = 0; i < numberList.length; i++) {
      for (let j = 0; j < numberList2.length; j++) {
        const sum = numberList[i] + numberList2[j];
        if (sum <= 300 || sum >= 1000) {
          continue
        }
        console.log(`${numberList[i]} + ${numberList2[j]} = ${sum}`);
      }
    }

    console.log('=================');

    for (let eli of numberList) {
      for (let elj of numberList2) {
        const sum = eli + elj
        if (sum <= 300 || sum >= 1000) {
          continue
        }
        console.log(`${eli} + ${elj} = ${eli + elj}`);
      }
    }

    console.log('=================');

    numberList.forEach(eli => {
      numberList2.forEach(elj => {
        const sum = eli + elj
        // if (sum <= 300 || sum >= 1000) {
        // } else {
        //   console.log(`${eli} + ${elj} = ${eli + elj}`);
        // }

        if (sum > 300 && sum < 1000) {
          console.log(`${eli} + ${elj} = ${eli + elj}`);
        }

        // error
        // if (300 < sum < 1000) {
        //   console.log(`${eli} + ${elj} = ${eli + elj}`);
        // }
      })
    })

    console.log(parseInt(2).toString(2));
  }

})

