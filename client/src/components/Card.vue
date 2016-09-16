<template>
    <div id="stage">
        <div class="cardWrapper" @click="this.flipCard()">
            <div id="thiscard" class="card">
                <div class="cardFace back">
                    <h1>Back</h1>
                </div>
                <div class="cardFace front">
                    <?xml version="1.0" encoding="utf-8"?>
                    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

                    <svg version="1.1" id="AS"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px" y="0px"width="140px" height="201px"
                        viewBox="0 0 140 201"
                        enable-background="new 0 0 140 201" xml:space="preserve">

                    <symbol  id="faceLabel" viewBox="-12 -19.5 32.2 53.6">
                        <text transform="matrix(1 0 0 -1 -10.7998 -6.7197)"
                              font-family="'BodoniSvtyTwoOSITCTT-Book'" font-size="48">
                            {{ face }}
                        </text>
                    </symbol>

                    <symbol id="CardFront" viewBox="-68.5 -97.4 140 201">

                            <use xlink:href="#card"  width="140" height="201" id="XMLID_10_" x="-68" y="-98" transform="matrix(1 0 0 1 -0.5 0.5596)" overflow="visible"/>

                            <use xlink:href="#faceLabel"  width="36" height="54" id="XMLID_7_" x="-20" y="-15" transform="matrix(1 0 0 1 -39.5 62.5596)" overflow="visible"/>

                            <use xlink:href="#spade"  width="48" height="66.2" x="-24" y="-33.1" transform="matrix(0.6875 0 0 0.6875 -35 26.9087)" overflow="visible"/>

                            <use xlink:href="#spade"  width="48" height="66.2" id="XMLID_5_" x="-24" y="-33.1" transform="matrix(1.8563 0 0 1.8563 16.0518 -21.8003)" overflow="visible"/>
                    </symbol>

                    <symbol  id="card" viewBox="-68 -98 140 201">
                        <path fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" d="M71.5-93.5c0-2.2-1.8-4-4-4h-131c-2.2,0-4,1.8-4,4v192
                            c0,2.2,1.8,4,4,4h131c2.2,0,4-1.8,4-4V-93.5z"/>
                        <polygon display="none" fill="none" points="-68,103 72,103 72,-98 -68,-98 	"/>
                    </symbol>

                    <symbol  id="club" viewBox="-23 -23.1 46 46.2">
                        <path d="M5.9-22.8c-10,0-17-0.3-17-0.3l4.7,15.7c0,0-6.3-7-11.7-1.7c-2.2,2.2-7.3,6.7-1.7,13.3S-8.1,6.5-8.1,6.5s-4,3.7-1,12.3
                            s19.7,2,21.3-2s-4.3-11-4.3-11s8.9,1.1,13-4.7c3.3-4.7,0-12-4-13.3c-8-2.7-13,5-13,5"/>
                        <polygon display="none" fill="none" points="-23,23 23,23 23,-23 -23,-23 	"/>
                    </symbol>

                    <symbol  id="diamond" viewBox="-21 -25.5 42 51">
                        <polygon fill="#ED1C24" points="-1,-25.5 -21,-0.5 -2,25.5 21,1.5 	"/>
                        <polygon display="none" fill="none" points="-21,25 21,25 21,-25 -21,-25 	"/>
                    </symbol>

                    <symbol  id="heart" viewBox="-19 -21 39 39.5">
                        <path fill="#ED1C24" d="M-0.7-21c3.4,5-18,19.9-18,25.9s2,13.7,9.9,13.7s9-9.2,9-9.2s-1.8,9.2,8.4,9.2c10.2,0,11.6-12.3,10.8-15.8"
                            />
                        <polygon display="none" fill="none" points="-19,18 20,18 20,-21 -19,-21 	"/>
                    </symbol>

                    <symbol  id="spade" viewBox="-24 -33.1 48 66.2">
                        <path d="M-3.8-14.6c-5.7-5.4-16.3-4.5-19.3,3.7c-3,8.2,5.7,18.3,10.7,24c5.3,6,9.1,14.8,14.9,20C0.2,29,4.1,23.3,6.1,19.8
                            c4.3-7.3,10.3-13.2,14.1-20.8c1.7-3.4,4.5-7.9,3.1-11.8c-1.3-3.6-6.2-6.4-10-6c-3.6,0.4-6.3,3.6-10.2,3.3c0.5-2.7,3.1-5.3,4.6-7.6
                            c2.1-3.2,3.6-7.2,6.2-10c-3.5,0-7,1.5-10.6,1.6c-3.9,0.1-7.9,0.1-11.9-0.1c-2.6-0.1-6.4-1.2-8.7-0.2"/>
                        <polygon display="none" fill="none" points="-24,33 24,33 24,-33 -24,-33 	"/>
                    </symbol>

                    <use xlink:href="#CardFront"  width="140" height="201" id="XMLID_2_" x="-68.5" y="-97.4" transform="matrix(1 0 0 -1 68.5 104.5601)" overflow="visible"/>
                   </svg>
                </div>
            </div>
        </div>
    </div>
</template>


<script type="text/babel">

    window.TweenMax.set('.cardWrapper', { perspective: 800 });
    window.TweenMax.set('.card', { transformStyle: 'preserve-3d' });
    window.TweenMax.set('.back', { rotationY: -180 });
    window.TweenMax.set(['.back', '.front'], { backfaceVisibility: 'hidden' });

    export default {
        name: 'Card',
        data () {
            return {
                title: 'Card',
                face: 'A',
                suit: 'diamond',
                faceUp: true
            }
        },
        created () {
            let card = document.getElementById('thiscard');
            window.TweenMax.staggerTo(card, 1,
                { rotationY: -180, repeat: 1, yoyo: true }, 0.1);
        },
        methods: {
            flipCard: function () {
                window.TweenMax.set('.cardWrapper', { perspective: 800 });
                window.TweenMax.set('.card', { transformStyle: 'preserve-3d' });
                window.TweenMax.set('.back', { rotationY: -180 });
                window.TweenMax.set(['.back', '.front'], { backfaceVisibility: 'hidden' });

                let card = document.getElementById('thiscard');
                if (this.faceUp) {
                    window.TweenMax.to(card, 1.2,
                        { rotationY: 0, ease: Back.easeOut });
                    this.faceUp = false;
                } else {
                    window.TweenMax.to(card, 1.2,
                        { rotationY: 180, ease: Back.easeOut });
                    this.faceUp = true;
                }
            }
        }
    }

</script>

<style>
    .cardWrapper {
        width:140px;
        height:201px;
        position:absolute;
        float:left;
        margin-right:10px;
        cursor:pointer;
        -webkit-font-smoothing:antialiased;
    }
    .cardFace{
        position:absolute;
        width:140px;
        height:201px;
        overflow:hidden;
    }
    .front{
    }
    .back{
        background-color: #333333;
    }
    .cardFace h1{
        margin:0px;
        font-size:30px;
        padding:10px 0px 10px 10px;
        border-bottom:solid 6px #aaa;
        border-top:solid 6px #aaa;
        background-color:black;
        color: #ffffff;
    }
    .cardFace.back h1{
        border-color:#91e600;
    }
</style>
