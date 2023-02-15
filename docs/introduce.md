# RASTER - IMAGE
- Là các pixel màu xếp cùng nhau tạo nên hình ảnh có màu sắc.
- Hình ảnh Raster thường là tệp lớn, thường được sử dụng trong web và in ấn

# WEBGL (Web Graphics Library)
- Được hiểu đơn giản là 3D API (tạo các hình ảnh Raster)
- Là một Plugin miễn phí tạo hình ảnh 3D cho web.

# Canvas
- Là phần tử HTML5 sử dụng làm trình kết xuất đồ họa cho THREEJS
- ThreeJS sẽ chuyển mô hình 3D trên đây
- Link tham khảo: https://viblo.asia/p/gioi-thieu-html5-canvas-PjxMeV6gG4YL

# THREE JS
- Là thư viện JS dùng WebGL để vẽ 3D
- ThreeJS giúp chúng ta tạo nên các hình ảnh 3D trên brower chỉ bằng JS mà không cần phải tại platform, application nào để người dùng có thể trải nghiệm hình ảnh 3D.
=> Link tham khảo về ThreeJS: https://viblo.asia/p/threejs-bai-1-lam-quen-voi-moi-truong-3d-cua-threejs-vyDZO7ROZwj#_webgl-la-gi-3
----------------------------------------------------------------

                        THREE JS 
# Scene
- Nơi sẽ chứa các object 3D như 1 vũ trụ thu nhỏ
- Sẽ là một màn đen như vũ trụ thu nhỏ và các Mesh(các thành phần 3D) vào bên trong nó
# Camera 
- Nó giống như 1 camera chạy trong 1 vũ trụ thu nhỏ 
- Hãy tưởng tượng khi làm threeJS bạn như đang dựng phim z và camera ở đây như camera trong phim trường bạn dùng để catch lại các phân cảnh với vị trí, bối cảnh và di chuyển như vậy.
- Có 2 loại camera:
  + Perspective camera: Camera sẽ có điểm nhìn và hình ảnh thể hiện sự xa gần của vật thể đối với camera
  + Orthographic camera: Camera sẽ có điểm nhìn và hình ảnh trực diện không thể hiện sự xa gần đối với các vật thể.
    => Link tham khảo cho 2 cameera này ở trên
- Trong ThreeJS chúng ta thường sử dụng Perspective camera
  + Cú pháp khai báo camera
    * PerspectiveCamera(fov : Number, aspect : Number, near : Number, far : Number)
        - fov: (field of view) tham số này định nghĩa góc có thể nhìn được, tức là camera có thể nhìn được bao nhiêu sẽ dựa vào tham số này, có đơn vị đo góc là deg, range là 1 tới 179 deg. Nó cũng định nghĩa ra kích cỡ độ lớn của vật thể khi ở xa so với vật thể khi ở gần camera.
        - aspect: Tham số chỉ ra tỉ lệ của camera (kiểu như kích cỡ của video phim chuẩn là tỉ lệ 16:9 ấy). Ở đây mình dùng chính tỉ lệ của màn hình web hiện tại làm tỉ lệ nên nó là: window.innerWidth / window.innerHeight
        - far và near: Tham số tương tự như perepective trong css, chỉ ra giới hạn xa gần của camera. Far là điểm cực xa của camera (default là 2000), near là điểm cực gần của camera (default là 0.1), tất nhiên là far luôn phải lớn hơn near.

    => Cú pháp chuẩn để khai báo camera: 
    * const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

# 
