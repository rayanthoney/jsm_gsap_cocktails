
    const videoRef = useRef()

    const isMobile = useMediaQuery({ maxWidth: 767 });

        const startValue =  isMobile ? "top 50%" : 'center 60%';
        const endValue = isMobile ? '120% top' : 'bottom top';

        // Video animation timeline
        // Create the timeline with a default duration
        videoTimelineRef.current = gsap.timeline({
            scrollTrigger: {
                trigger: 'video',
                start: startValue,
                end: endValue,
                scrub: true,
                onEnter: () => videoRef.current.play(),
                onEnterBack: () => videoRef.current.play(),
                onLeave: () => videoRef.current.pause(),
                onLeaveBack: () => videoRef.current.pause(),
            },
        })

        .fromTo(videoRef.current,
        {
            currentTime: 0,
            scale: isMobile ? 1.2 : 1.5,
            opacity: 0.5,
        }
    )


    ## backup hero.jsx

    ```jsx
    import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef();

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "words, chars" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.05,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.05,
      delay: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);

      const startValue = isMobile ? 'top 50%' : 'center 60%';
      const endValue = isMobile ? '120% top' : 'bottom top';
  }, []);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>

        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes - designed to delight your
                senses.
              </p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>

      <div className="video absolute inset-0">
        <video
          ref={videoRef}
          src="/videos/input.mp4"
          muted
          playsInline
          preload="auto"
        />
      </div>
    </>
  );
};

export default Hero;

```

[Build a Full Stack React Native App with Payments](https://www.youtube.com/watch?v=kmy_YNhl0mw&list=PL6QREj8te1P7faGPL2hfiM8F9zdOvZpbF&index=1&t=364s)