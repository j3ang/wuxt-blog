export default wp =>
  (wp.cpt = postType => {
    wp[postType] = wp.registerRoute('wp/v2', '/' + postType + '/(?P<id>)', {
      params: ['embed', 'before', 'after', 'author', 'parent', 'post', 'book', 'project']
    })
    return wp[postType]()
  })
