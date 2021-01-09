function showComponentWithinLayout(Layout,WrappedComponent){

  return (
    <Layout>
      {
        <WrappedComponent />
      }
    </Layout>
  )
}

export default showComponentWithinLayout