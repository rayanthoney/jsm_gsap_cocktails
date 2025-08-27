
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