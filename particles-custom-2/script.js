particlesJS('particles-js',
    {
        "particles": {
            //シェイプ数
            "number": {
                //要素内に表示するシェイプの数
                "value": 200,
                "density": {
                    //シェイプ表示間隔設定
                    "enable": true, //true:有効, false:無効
                    //シェイプ表示間隔
                    "value_area": 1000
                }
            },
            //シェイプ色
            "color": {
                "value": "#ffffff" //複数指定["#ff7fbf", "#ff7fff", "#bf7fff"]
            },

            //シェイプの設定
            "shape": {
                //シェイプ形
                "type": "image", //設定値：circle, edge, triangle, polygon, star, image, 複数指定["circle", "triangle", "image"]

                //シェイプボーダー設定
                "stroke": {
                    //ボーダー幅
                    "width": 0,
                    //ボーダー色
                    "color": "#000000"
                },
                //シェイプの形でpolygonを指定した場合
                "polygon": {
                    //ポリゴン角数指定
                    "nb_sides": 5
                },

                //シェイプの形でimageを指定した場合
                "image": {
                    //画像パス
                    "src": "images/oreda 1.png",
                    //画像幅
                    "width": 100,
                    //画像高さ
                    "height": 100
                }
            },

            //シェイプ透過率指定
            "opacity": {
                //透過率指定
                "value": 0.5,
                //ランダム設定
                "random": false, //true:有効, false:無効

                //透過アニメーション設定
                "anim": {
                    //アニメーション設定
                    "enable": false, //true:有効, false:無効
                    //アニメーション速度
                    "speed": 1,
                    //アニメーション最小透過率
                    "opacity_min": 0.1,
                    //アニメーション同期
                    "sync": false //true:有効, false:無効
                }
            },

            //シェイプサイズ
            "size": {
                //★【変更点】普段は小さくしておく（ギャップを作るため 50 -> 20 に変更）
                "value": 3,
                //ランダムサイズ
                "random": false, //true:有効, false:無効
                //サイズアニメーション設定
                "anim": {
                    //アニメーション設定
                    "enable": false, //true:有効, false:無効
                    //アニメーション速度
                    "speed": 70,
                    //アニメーション時のシェイプ最小サイズ,
                    "size_min": 0.1,
                    //アニメーション同期設定
                    "sync": false //true:有効, false:無効
                }
            },

            //シェイプを線で繋ぐか
            "line_linked": {
                //線の設定
                "enable": true, //true:有効, false:無効
                //線の間隔
                "distance": 150,
                //線の色
                "color": "#ffffff",
                //線の透過率
                "opacity": 0.7,
                //線の幅
                "width": 1
            },
            //シェイプの動きの設定
            "move": {
                //動きを制御するか
                "enable": true, //true:有効, false:無効
                //動く速度
                "speed": 6,
                //動く方向
                "direction": "none", //none, top, top-right, right, bottom-right, bottom, bottom-left, left, top-left
                //ランダム設定
                "random": false, //true:有効, false:無効
                //静止状態にする
                "straight": false, //true:有効, false:無効
                //シェイプの動き
                "out_mode": "out", //ボックス内で動かす bounce ボックス外に逃がす out
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",

            //マウスイベント設定
            "events": {
                //マウスオーバー時の処理
                "onhover": {
                    "enable": true, //true:有効, false:無効
                    //★【変更点】ホバー時の処理を巨大化（"grab" -> "bubble"）に変更
                    "mode": "bubble"
                },

                //クリック時の処理処理
                "onclick": {
                    //クリック時の処理
                    "enable": true, //true:有効, false:無効
                    //クリック時の処理の設定
                    "mode": "push" //push:追加, remove:削除, bubble:拡大, repulse:拒絶
                },
                "resize": true
            },
            //以下でマウスイベント発生時の詳細値を設定
            "modes": {
                "grab": {
                    "distance": 200,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                //★【変更点】巨大化（bubble）の値をドカンと膨らむように調整
                "bubble": {
                    "distance": 180, //巨大化が反応するカーソルからの距離
                    "size": 250,     //膨らんだ時の最大サイズ（40 -> 180に大幅拡大）
                    "duration": 0.3, //膨らむまでの時間（2 -> 0.3秒に縮めて「ドカン」感を演出）
                    "opacity": 1,    //膨らんだ時の透過率（誤表記の8 -> 1に修正）
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        //Retina Display対応
        "retina_detect": true //true:有効, false:無効
    }
);