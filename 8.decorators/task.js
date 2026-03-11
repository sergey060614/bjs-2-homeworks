//Задача № 1
function cachingDecoratorNew(func) {
  const cache = [];

  return function (...args) {
    const hash = md5(JSON.stringify(args));
    const findvalue = cache.find((cacheValue) => cacheValue.hash === hash);
    if (findvalue) {
      console.log("Из кеша: " + findvalue.value);
      return "Из кеша: " + findvalue.value;
    }
    
    const value = func(...args);
    cache.push({ hash, value });

    if (cache.length > 5) {
      cache.shift();
    }

    console.log("Вычисляем: " + value);
    return "Вычисляем: " + value;
  };
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  let hasFirstRun = false;

  function wrapper(...args) {
    wrapper.allCount++;

    if (!hasFirstRun) {
      wrapper.count++;
      func(...args);
      hasFirstRun = true;
    } else {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        wrapper.count++;
        func(...args);
      }, delay);
    }
  }

  wrapper.count = 0;
  wrapper.allCount = 0;

  return wrapper;
}

module.exports = {
  debounceDecoratorNew
};

