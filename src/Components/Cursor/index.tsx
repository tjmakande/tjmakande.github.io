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

        const Links = document.querySelectorAll('.Applink');
        Links.forEach((element) => {
            element.addEventListener('mouseenter', () => {
                cursor && cursor.classList.add('mouseOverLink');
            })

            element.addEventListener('mouseleave', () => {
                cursor && cursor.classList.remove('mouseOverLink');
            })
        })
    }, [Mouseref])

    return(
      <div className='mouse' ref={Mouseref}></div>
    )
}

export default Cursor;

/* 

  // Case 3: moreworks thumb image
      const expandCursorWithImage = document.querySelectorAll('.img-cursor');
      expandCursorWithImage.forEach((element) => {
        element.addEventListener('mouseenter', (e) => {
          cursor.classList.add('expand');
          if (e.currentTarget.querySelector('img')) {
            const imageSrc = e.currentTarget.querySelector('img').src;
            const cursorBox = cursor.querySelector('.cursor-inner');
            cursorBox.style.backgroundImage = `url(${imageSrc})`;
          }
        });
        element.addEventListener('mouseleave', () => {
          cursor.classList.remove('expand');
          const cursorBox = cursor.querySelector('.cursor-inner');
          cursorBox.style.backgroundImage = '';
        });
        element.addEventListener('click', () => {
          cursor.classList.remove('expand');
          const cursorBox = cursor.querySelector('.cursor-inner');
          cursorBox.style.backgroundImage = '';
        });
      });

*/