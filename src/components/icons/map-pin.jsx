function MapPin({ size, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_495_4128)">
        <path d="M21.6981 10.6445C21.6981 17.6445 12.6981 23.6445 12.6981 23.6445C12.6981 23.6445 3.69812 17.6445 3.69812 10.6445C3.69812 8.25758 4.64633 5.9684 6.33416 4.28057C8.02199 2.59274 10.3112 1.64453 12.6981 1.64453C15.0851 1.64453 17.3743 2.59274 19.0621 4.28057C20.7499 5.9684 21.6981 8.25758 21.6981 10.6445Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.6981 13.6445C14.355 13.6445 15.6981 12.3014 15.6981 10.6445C15.6981 8.98768 14.355 7.64453 12.6981 7.64453C11.0413 7.64453 9.69812 8.98768 9.69812 10.6445C9.69812 12.3014 11.0413 13.6445 12.6981 13.6445Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
  </svg>

    
  )
}

export default MapPin
