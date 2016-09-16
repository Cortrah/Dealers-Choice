<template>
    <div id="stage">
        <div class="cardWrapper">
            <div class="card">
                <div class="cardFace front">
                    <h1>front</h1>
                </div>
                <div class="cardFace back">
                    <h1>back</h1>
                </div>
            </div>
        </div>
        <div class="cardWrapper">
            <div class="card">
                <div class="cardFace front">
                    <h1>front</h1>
                </div>
                <div class="cardFace back">
                    <h1>back</h1>
                </div>
            </div>
        </div>
        <div class="cardWrapper">
            <div class="card">
                <div class="cardFace front">
                    <img src="http://s.cdpn.io/16327/logo_texture.jpg">
                </div>
                <div class="cardFace back">
                    <img src="http://s.cdpn.io/16327/logo_robust.jpg">
                </div>
            </div>
        </div>
        <div class="cardWrapper">
            <div class="card">
                <div class="cardFace front"><h1>front</h1></div>
                <div class="cardFace back"><h1>back</h1></div>
            </div>
        </div>
        <div class="cardWrapper">
            <div class="card">
                <div class="cardFace front">
                    <h1>front</h1>
                </div>
                <div class="cardFace back">
                    <div class="moreInfo">This is just an example of how you can customize the content of any card face.</div>
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

    $('.cardWrapper').hover(
        function () {
            window.TweenMax.to($(this).find('.card'), 1.2,
                { rotationY: 180, ease: Back.easeOut });
        },
        function () {
            window.TweenMax.to($(this).find('.card'), 1.2,
                { rotationY: 0, ease: Back.easeOut });
        }
    );

    // stagger in
    window.TweenMax.staggerTo($('.card'), 1,
        { rotationY: -180, repeat: 1, yoyo: true }, 0.1);

    export default {
        name: 'Card',
        props: ['store'],
        data () {
            return {
                title: 'Card'
            }
        },
        methods: {
            reset: function () {
                this.sent = true;
            }
        }
    }
</script>
<style>
    html {
        height: 100%;
    }

    body {
        height: 100%;
        width: 900px;
        background-color: black;
        margin:20px;
        font-family:Arial, sans-serif;
    }

    .cardWrapper{
        width:200px;
        height:200px;
        position:relative;
        /*background-color:#333;*/
        float:left;
        margin-right:10px;
        cursor:pointer;
        -webkit-font-smoothing:antialiased;
    }
    .cardFace{
        position:absolute;
        width:200px;
        height:200px;
        overflow:hidden;
    }
    .front{
        background-color:#333;
    }
    .back{
        background-color:#333;
    }
    .cardFace h1{
        margin:0px;
        font-size:30px;
        padding:10px 0px 10px 10px;
        border-bottom:solid 6px #aaa;
        border-top:solid 6px #aaa;
        background-color:black;
        color:white;
    }
    .cardFace.back h1{
        border-color:#91e600;
    }
    .moreInfo{
        padding:10px;
        color:white;
        line-height:24px;
    }
</style>
