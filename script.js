gsap.to(".image-container",
    {       delay:2,
            width : "100%",
            ease :  Expo.easeInOut,
            duration : 2,
            stagger : 2
        })
        gsap.to(".text h1",
            {       
                delay : 2,
                    ease :  Expo.easeInOut,
                    duration :3,
                    stagger : 3 ,
                    top: "-100%"
                })