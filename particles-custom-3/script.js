particlesJS('particles-js',
    {
        "particles": {
            "number": {
                "value": 40, // 画像の場合は少なめの方が見やすいです
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": ["image"], // 複数画像をランダム指定
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "image": [
                    {
                        "src": "images/unnti2.png",
                        "width": 150,
                        "height": 150
                    },
                    {
                        "src": "images/unnti3.png", // ※ファイル名のスペースを「_」などに変更推奨
                        "width": 150,
                        "height": 150
                    },
                    {
                        "src": "images/unnti.png",
                        "width": 150,
                        "height": 150
                    }
                ]
            },
            "opacity": {
                "value": 0.8,
                "random": false
            },
            "size": {
                "value": 30, // ★重要：画像が見える大きさに変更 (6 -> 30)
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#00ffff",
                "opacity": 0.4,
                "width": 1.5
            },
            "move": {
                "enable": true,
                "speed": 1.5,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out"
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 250,
                    "line_linked": {
                        "opacity": 0.8
                    }
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    }
);