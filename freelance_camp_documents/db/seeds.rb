10.times do |d|
  FreelanceDocument.create!(
    title: "Document #{d}",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    file_url: "https://docs.google.com/document/d/1UUgAob6ZpivgkgCbMD84JMMRc1flrzCPKybtQoAfASo/edit",
    image_url: 'https://s3.amazonaws.com/devcamp-static/images/freelance-img.jpg'
  )
end
