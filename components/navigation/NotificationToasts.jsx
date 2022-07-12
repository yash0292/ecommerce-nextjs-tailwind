import { IoCloseOutline} from 'react-icons/io5'

const NotificationToasts = () => {
  return (
    <div className="notification-toast" data-toast>
    <button className="toast-close-btn" data-toast-close>
        <IoCloseOutline />
    </button>

    <div className="toast-banner">
        <img
            src="images/products/jewellery-1.jpg"
            alt="Rose Gold Earrings"
            width="80"
            height="70"
        />
    </div>

    <div className="toast-detail">
        <p className="toast-message">Someone in new just bought</p>

        <p className="toast-title">Rose Gold Earrings</p>

        <p className="toast-meta"><time dateTime="PT2M">2 Minutes</time> ago</p>
    </div>
</div>
  )
}

export default NotificationToasts