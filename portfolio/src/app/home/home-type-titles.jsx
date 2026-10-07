'use client';

import { useEffect, useState } from 'react';
import { getHomeTypeTiming } from '@/lib/motion/tokens';

export default function HomeTypeTitles({ titles, reduceMotion }) {
  const firstTitle = titles[0] || '';
  const [text, setText] = useState(firstTitle);
  const titlesKey = titles.join('|');

  useEffect(() => {
    if (reduceMotion || titlesKey.length === 0) {
      return undefined;
    }

    let cancelled = false;
    let timeoutId;
    const list = titlesKey.split('|');
    const timing = getHomeTypeTiming();

    function wait(ms) {
      return new Promise((resolve) => {
        timeoutId = setTimeout(resolve, ms);
      });
    }

    async function run() {
      let index = 0;

      while (!cancelled) {
        await wait(timing.holdMs);
        if (cancelled) return;

        const leaving = list[index];
        for (let n = leaving.length; n > 0; n -= 1) {
          await wait(timing.deleteMs);
          if (cancelled) return;
          setText(leaving.slice(0, n - 1));
        }

        index = (index + 1) % list.length;
        const next = list[index];
        for (let n = 1; n <= next.length; n += 1) {
          await wait(timing.typeMs);
          if (cancelled) return;
          setText(next.slice(0, n));
        }
      }
    }

    run();

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [reduceMotion, titlesKey]);

  if (reduceMotion) {
    return <span>{firstTitle}</span>;
  }

  return (
    <span className="inline-block">
      {text}
      <span className="home-type-caret" aria-hidden="true">
        |
      </span>
    </span>
  );
}
