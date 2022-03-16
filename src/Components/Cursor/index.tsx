import React, {createRef, useEffect} from 'react';

const Cursor = () => {
    const Mouseref = createRef<HTMLDivElement>();

    useEffect(() => {
        const cursor = Mouseref.current;
        const mouse = {x: -100, y: -100};
        const pos = { x:  0 , y: 0};
        const speed = 0.15;

        const updateCordinates = (e: { clientX: number; clientY: number; }) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        }

        window.addEventListener('mousemove', updateCordinates);

        const updatePosition = () => {
            pos.x += (mouse.x - pos.x) * speed;
            pos.y += (mouse.y - pos.y) * speed;
            cursor && (cursor.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`)
        }

        function loop() {
            updatePosition();
            requestAnimationFrame(loop);
        }

        requestAnimationFrame(loop);
    }, [Mouseref])

    return(
      <div className='rounded' ref={Mouseref}></div>
    )
}

export default Cursor;