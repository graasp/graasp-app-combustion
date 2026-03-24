import { useContext, useEffect, useRef } from 'react';

import { setDimensions } from '@/actions/app-settings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

interface Props {
  showSideMenu: boolean;
}

const Canvas = ({ showSideMenu }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions } = state;

  const { width, height } = dimensions;
  console.log(width, height);

  const { dispatch } = useContext(AppSettingsContext);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkSize = (): void => {
      const stageWidth = divRef.current?.offsetWidth || 0;
      const stageHeight = divRef.current?.offsetHeight || 0;
      dispatch(
        setDimensions({
          width: showSideMenu ? stageWidth * 0.75 : stageWidth,
          height: stageHeight,
        }),
      );
    };
    const resizeObserver = new ResizeObserver(() => {
      checkSize();
    });
    const mainContainer = document.querySelector('#container');
    if (mainContainer) {
      resizeObserver.observe(mainContainer);
    }
    checkSize();
  }, [dispatch, showSideMenu]);

  return (
    <div
      style={{
        position: 'relative',
        height: '100%',
        width: '100%',
      }}
      ref={divRef}
      id="container"
    />
  );
};

export default Canvas;
