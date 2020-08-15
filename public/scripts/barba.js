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
            gsap.set('.profile-card', {
                opacity: 0
            });
        },
        afterEnter() {
            gsap.to('.profile-card', {
                duration: 1,
                stagger: 0.3,
                opacity: 1
            });
        }
    }, {
        namespace: 'gary',
        beforeLeave() {
            gsap.to('#gary-content', {
                duration: 1,
                display: 'none'
            });
        },
        beforeEnter() {
            gsap.set('#gary-content', {
                display: 'flex'
            });
        }
    },  {
        namespace: 'sandi',
        beforeLeave() {
            gsap.to('#sandi-content', {
                duration: 1,
                display: 'none'
            });
        },
        beforeEnter() {
            gsap.set('#sandi-content', {
                display: 'flex'
            });
        }
    },  {
        namespace: 'tim',
        beforeLeave() {
            gsap.to('#tim-content', {
                duration: 1,
                display: 'none'
            });
        },
        beforeEnter() {
            gsap.set('#tim-content', {
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
            namespace: ['gary', 'sandi', 'tim']
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
            namespace: ['gary', 'sandi', 'tim']
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