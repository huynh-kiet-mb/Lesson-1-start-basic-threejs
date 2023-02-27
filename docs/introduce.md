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

# VITEJS
- Chúng ta sẽ sử dụng viteJS để thực hiện tạo và chạy ThreeJS cho đơn giản
- Command line cài đặt 
    * npm init @vitejs/app hoặc npm init vite
    * npm install three
=> Và chúng ta có thể thực hiện cài đặt và tạo ThreeJS canvas trong project.

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

# Renderer
- Nói nôm na nó output khi input là camera và scene thì chúng ta cần cái gì đó để đưa ra thành canvas và lúc đó renderer sẽ làm điều đó.
- Cú pháp khai báo renderer cơ bản 
  renderer.setSize(window.innerWidth, window.innerHeight);
- Đưa renderer vào trong docments: 
  document.body.appendChild(renderer.domElement);

# Tổng kết đơn giản qua ví dụ
=> Hiểu đơn giản như này: camera của điện thoại chính là camera, bạn chụp ảnh thì chỉ có thể chụp được trong tầm nhìn của camera (xa thì bị mờ), vì vậy camera chính là thứ quyết định bạn có thể xem được cảnh - scence gì. Lúc này điện thoại đóng vai trò là renderer lấy ra các cảnh - scene được camera ghi lại và chiếu lên màn hình điện thoại - canvas cho chúng ta nhìn.

# Mesh 1
- chúng ta đã có tất cả những thành phần cần thiết để dựng ảnh và nền nhưng chúng ta thiếu VẬT
- Mesh chính là vật(object) trong vc này: vật 3D
- Mesh thường mô tả như lưới(các điểm nối với nhau thành dạng lưới) để tạo thành các khổi hình.
- Lưới càng dày thì độ chính xác của hình ảnh càng cao và rõ ràng.
- Chúng ta sẽ đi sâu hơn vào Mesh vì đây là thành phần tạo ra vật thể 3D.
# Mesh 2
- Một đối tượng Mesh là vỏ chứa hình GEOMETRY và chất liệu MATERIAL trong không gian 3 chiều.

    # GEOMETRY
    - Khổi hình học để xây dựng nên vật thể 3D
    - Link lấy data: https://threejs.org/docs/index.html?q=geometry#api/en/geometries/SphereGeometry

    # MATERIAL
    - Vật liệu cho khối hình ví dụ như metal, chrome, titan, skin,...
    - Link data: https://threejs.org/docs/index.html?q=mater#api/en/constants/Materials

=> Link tham khảo có ở trên.
