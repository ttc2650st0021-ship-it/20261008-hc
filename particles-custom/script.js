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
                    "src": "images/nonomurasan.png",
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
                //シェイプサイズ指定
                "value": 50,
                //ランダムサイズ
                "random": true, //true:有効, false:無効
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
                "color": "#000000",
                //線の透過率
                "opacity": 0.9,
                //線の幅
                "width": 1.5
            },
            //シェイプの動きの設定
            "move": {
                //動きを制御するか
                "enable": true, //true:有効, false:無効
                //★【変更点】通常移動の速度を速く設定（6 -> 12）
                "speed": 12,
                //動く方向
                "direction": "none", //none, top, top-right, right, bottom-right, bottom, bottom-left, left, top-left
                //ランダム設定
                "random": false, //true:有効, false:無効
                //静止状態にする
                "straight": false, //true:有効, false:無効
                //★【変更点】画面端で逃げずに弾き返される設定に変更（"out" -> "bounce"）
                "out_mode": "bounce",
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
                    //★【変更点】ホバー時に弾く挙動に変更（"grab" -> "repulse"）
                    "mode": "repulse"
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
                    "distance": 230,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 0.8, //誤記修正(8 -> 0.8)
                    "speed": 3
                },
                //★【変更点】弾き飛ばす範囲と効果時間を拡大
                "repulse": {
                    "distance": 220, //元の1から300に大幅拡大
                    "duration": 0.4
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