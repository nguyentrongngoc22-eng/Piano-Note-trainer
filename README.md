# 🎼 Luyện Nhớ Nốt Nhạc (Note Trainer)

Web app nhỏ gọn giúp luyện đọc nốt nhạc trên khuông (khóa Sol / khóa Fa). Thuần
HTML + SVG + JavaScript, không cần thư viện, chạy hoàn toàn trong trình duyệt —
mở `index.html` là dùng được, kể cả offline.

## ✨ Tính năng

- **3 chế độ**: Khóa Sol, Khóa Fa, hoặc trộn cả hai.
- **Phát đúng cao độ nốt** — nghe được nốt vừa đọc (Web Audio API), gắn tai với mắt.
- **Bàn phím**: `D R M F G L S` hoặc số `1–7` để trả lời nhanh, không cần chuột.
- **Lưu tiến độ** bằng `localStorage`: số đúng/sai, độ chính xác, chuỗi đúng
  liên tiếp (streak) và kỷ lục cao nhất được nhớ qua các lần mở app.
- **Chế độ tính giờ 60s** — trả lời càng nhiều càng tốt trong 1 phút.
- **Thống kê nốt hay sai nhất** để biết chỗ cần luyện thêm.
- **Bật/tắt dòng kẻ phụ** (ledger lines) cho người mới bắt đầu.
- Nút **Reset điểm** để làm lại từ đầu.
- **Cài được như ứng dụng (PWA)** trên Android/Chrome: có `manifest.json`,
  service worker (`sw.js`) precache toàn bộ file tĩnh → **chạy offline** và
  hiện lời mời "Thêm vào màn hình chính".

## ⌨️ Phím tắt

| Phím | Nốt | Phím | Nốt |
|------|-----|------|-----|
| `D` / `1` | Đô | `G` / `5` | Son |
| `R` / `2` | Rê | `L` / `6` | La |
| `M` / `3` | Mi | `S` / `7` | Si |
| `F` / `4` | Fa |      |     |

## 🚀 Cách dùng

Mở trực tiếp `index.html` bằng trình duyệt, hoặc chơi online qua GitHub Pages
(xem mục dưới).

## 🌐 Deploy bằng GitHub Pages

Repo đã kèm sẵn workflow `.github/workflows/deploy.yml`. Để bật:

1. Vào **Settings → Pages** của repo.
2. Ở mục **Build and deployment → Source**, chọn **GitHub Actions**.
3. Mỗi lần đẩy lên nhánh mặc định, app sẽ tự deploy và có link công khai.

## 📁 Cấu trúc

```
index.html                  # Toàn bộ app (giao diện + logic)
manifest.json               # Khai báo PWA
sw.js                       # Service worker (precache + offline)
icons/                      # Icon 192/512 + bản maskable
README.md
.github/workflows/deploy.yml
```

> **Ghi chú về subpath**: manifest và service worker đều dùng đường dẫn
> tương đối (`./`), nên app hoạt động đúng ở bất kỳ đường dẫn con nào của
> GitHub Pages (ví dụ `/<tên-repo>/`) mà không cần chỉnh sửa gì.
