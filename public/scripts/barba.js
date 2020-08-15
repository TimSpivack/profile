barba.init({
    // views
    views: [{
        namespace: 'index',
        beforeLeave() {
            gsap.to('#index-content', {
                duration: 1,
                display: 'none'
            });
        },
        beforeEnter() {
            gsap.set('#index-content', {
                display: 'flex'
            });
        }
    }, {
        namespace: 'about',
        beforeLeave() {
            gsap.to('#about-content', {
                duration: 1,
                display: 'none'
            });
        },
        beforeEnter() {
            gsap.set('#about-content', {
                display: 'flex'
            });
        }
    }],

    // transitions
    transitions: [{
        name: 'top-bottom',
        from: {
            namespace: ['index']
        },
        to: {
            namespace: ['about']
        },
        leave() {
            return gsap.to('.transition-top-bottom', {
                duration: 1,
                top: '0',
                ease: 'power1.out'
            })
        },
        enter() {
            var tl = gsap.timeline();

            tl.to('.transition-top-bottom', {
                duration: 1,
                top: '100vh',
                ease: 'power1.in'
            }).set('.transition-top-bottom', {
                top: '-100vh'
            });

            return tl;
        }
    }, {
        name: 'bottom-top',
        from: {
            namespace: ['about']
        },
        to: {
            namespace: ['index']
        },
        leave() {
            return gsap.to('.transition-bottom-top', {
                duration: 1,
                top: '0',
                ease: 'power1.out'
            })
        },
        enter() {
            var tl = gsap.timeline();

            tl.to('.transition-bottom-top', {
                duration: 1,
                top: '-100vh',
                ease: 'power1.in'
            }).set('.transition-bottom-top', {
                top: '100vh'
            });

            return tl;
        }
    }]
})