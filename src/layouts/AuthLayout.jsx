import '../pages/Login/Login.css'

const galleryImages = [
  'restaurant-dining-room.jpg',
  'garden-cafe.jpg',
  'food-table.jpg',
  'restaurant-patio.jpg',
  'bright-cafe-interior.jpg',
  'restaurant-bar.jpg',
]

const galleryPositions = [
  'center-top',
  'right-top',
  'right-middle',
  'right-bottom',
  'center-bottom',
]

function AuthLayout({ children, className = '' }) {
  return (
    <main className={`login-page ${className}`}>
      <section className="login-card">
        <div className="login-content">
          <div className="brand" aria-label="SoiNow">
            Soi<span>Now</span>
          </div>
          <div className="login-form-wrap">
            {children}
          </div>
        </div>
        <div className="image-grid" aria-label="Restaurant gallery">
          {galleryImages.slice(0, -1).map((image, index) => (
            <div
              key={image}
              className={
                index === 0
                  ? 'image-center-top'
                  : `gallery-tile image-${galleryPositions[index]}`
              }
            >
              {index === 0 ? (
                <div className="gallery-tile upper-image-frame">
                  <img
                    className="gallery-image"
                    src={`/assets/login/${image}`}
                    alt="Restaurant"
                  />
                </div>
              ) : (
                <img
                  className="gallery-image"
                  src={`/assets/login/${image}`}
                  alt="Restaurant"
                />
              )}
              {index === 0 && (
                <div className="gallery-tile image-overlay">
                  <img
                    className="gallery-image"
                    src={`/assets/login/${galleryImages[galleryImages.length - 1]}`}
                    alt="Restaurant"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default AuthLayout

