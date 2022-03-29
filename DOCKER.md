<!--
    + DOCKER IMAGES:
        - Một Docker Image là một read-only template dùng để tạo ra các containers. Image được cấu tạo theo dạng layer và tất cả các layer đều là read-only. Một image có thể được tạo ra dựa trên một image khác với một số tùy chỉnh bổ sung. Nói ngắn gọn, Docker Image là nơi lưu trữ các cài đặt môi trường như OS, package, phần mềm cần chạy, …

        - Nếu nhìn nhận theo lập trình hướng đối tượng thì Docker Image giống như một class chứa các phương thức và thuộc tính, còn các containers là các thực thể (instance/object) của các class đó. Vì vậy từ 1 image chúng ta có thể tạo ra nhiều containers với môi trường bên trong giống hệt nhau.

        - Các lệnh thường dùng:
            1) Lệnh kiểm tra các images hiện có:
                - docker images

            2) Lệnh tải image:
                - docker pull image<name-image>:tag<version>
                - VD: docker pull ubuntu:16.04

            3) Lệnh xóa các image:
                + Cách 1: xóa thông qua tên image:
                    - docker image rm <name-image>:<version>
                    - VD: docker image rm ubuntu:18.04

                + Cách 2: xóa thông qua ID image:
                    - docker image rm <ID-image>
                    - VD: docker image rm b67d6ac264e4 (ID của ubuntu:18.04)

            
            4) Lệnh chạy các container:
            - Khi images chạy các phiên bản thực thi của images được gọi là các container.
                
                + Lệnh chạy các container:
                    - docker run <tham số của lệnh> <Tên Images/ ID Images> <command tham sô>(Khi container được tạo và chạy chúng ta muốn thực thi ngay một lệnh nào đó thì thêm vào command).

                    - docker run -i<container có tương tác> -t<có sử dụng terminal> <Tên của images>

                    - VD: chúng ta sẽ chạy container từ images hệ điều hành Ubuntu.
                        docker run -it ubuntu:latest

                + Lệnh kiểm tra xem có container nào đang chạy:
                    - docker ps
                    - docker ps -a <Liệt kê tất cả các container đang chạy và không chạy>
                    - VD:

                        CONTAINER ID   IMAGE                    COMMAND                  CREATED             STATUS             PORTS                NAMES
                        52d9157f6ac8   ubuntu:latest            "bash"                   5 minutes ago       Up 5 minutes                            naughty_chaum
                        d2983639cc5e   docker/getting-started   "/docker-entrypoint.…"   About an hour ago   Up About an hour   0.0.0.0:80->80/tcp   vigorous_chaplygin

                + Thoát container:
                    - Ta sử dụng exit container sẽ kết thúc và thoát ra. trên command line


-->