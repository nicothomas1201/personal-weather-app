import MapPin from "./map-pin"
import Navigation from "./navigation"

function Index({ name, ...props}) {
  switch(name) {
    case 'pin': {
      return <MapPin {...props} />
    }

    case 'navigation': {
      return <Navigation {...props} />
    }

    default: {
      return <span>Este icon no existe</span>
    }
  }
}

Index.defaultProps = {
  color: 'var(--white-10)',
  size: 22
}

export default Index
