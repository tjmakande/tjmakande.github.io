import {createRef, useEffect} from 'react';
// import {isDesktop} from 'utils/device';

const Cursor = () => {
    const Mouseref = createRef<HTMLDivElement>();

    useEffect(() => {
        const cursor = Mouseref.current;
        const mouse = {x: -100, y: -100};
        const pos = { x:  0 , y: 0};
        const speed = 0.15;

        const touch = matchMedia('(hover: none), (pointer: coarse)').matches;

        if (touch) {
            if (cursor) cursor.style.opacity = '0';
          } else {
              if (cursor) cursor.style.opacity = '1';

              const updateCordinates = (e: { clientX: number; clientY: number; }) => {
                mouse.x = e.clientX;
                mouse.y = e.clientY;
              };

              window.addEventListener('mousemove', updateCordinates);

              const updatePosition = () => {
                pos.x += (mouse.x - pos.x) * speed;
                pos.y += (mouse.y - pos.y) * speed;
                if (cursor) cursor.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
              };

              const loop = () =>  {
                updatePosition();
                requestAnimationFrame(loop);
              };

              requestAnimationFrame(loop);

              // On Hover Page Links
              const Links = document.querySelectorAll('.Applink');
              Links.forEach((element) => {
                element.addEventListener('mouseenter', () => cursor && cursor.classList.add('mouseOverLink'));
                element.addEventListener('mouseleave', () => cursor && cursor.classList.remove('mouseOverLink'));
            });
            }
    }, [Mouseref]);

    return(
      <div className='mouse' ref={Mouseref}></div>
    );
};

export default Cursor;