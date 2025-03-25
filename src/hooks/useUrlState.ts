import { useState, useEffect } from 'react';

/**
 * 使用URL参数来管理组件状态的自定义Hook.
 * 它允许您将状态值与URL参数同步，以便于分享和书签化.
 * 
 * @param key URL参数的键名.
 * @param initialValue 状态的初始值，如果URL参数中没有值则使用.
 * @returns 返回一个状态值和一个用于更新状态值的函数.
 */
function useUrlState<T>(key: string, initialValue: T): [T, (value: T) => void] {
  // 初始化状态，优先使用URL参数中的值，如果没有则使用传入的初始值.
  const [state, setState] = useState<T>(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const storedValue = urlParams.get(key);
    return storedValue !== null ? JSON.parse(storedValue) : initialValue;
  });

  // 当状态或键名变化时，更新URL参数.
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set(key, JSON.stringify(state));
    window.history.replaceState({}, '', `${window.location.pathname}?${urlParams.toString()}`);
  }, [key, state]);

  // 监听浏览器的popstate事件，当用户导航到新状态时更新组件状态.
  useEffect(() => {
    const handlePopState = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const storedValue = urlParams.get(key);
      if (storedValue !== null) {
        setState(JSON.parse(storedValue));
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [key]);

  // 返回当前状态和更新状态的函数.
  return [state, setState];
}

// 导出自定义Hook以便在其他地方使用.
export default useUrlState;