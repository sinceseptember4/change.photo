# change.photo 
html ファイルにて以下の記述をする
```
   <div class="change-photo default">
        <ul>
            <li><a><img src="images"></a></li>
            <li><a><img src="images"></a></li>
            <li><a><img src="images"></a></li>
            <li><a><img src="images"></a></li>
        </ul>
    </div>
```
こちらの記述を行うことによってchange.photoを利用することができます。imgは何枚でも可。change-photoの複数記述も可。
 change-photo自体の大きさを調整する場合は親要素（partent）を作成の上、以下に記述する。
```
    <div class = "partent">
        <div class="change-photo">
            <ul>
                <li><a><img src="images"></a></li>
                <li><a><img src="images"></a></li>
                <li><a><img src="images"></a></li>
            </ul>
        </div>
    </div>
```
    
   
