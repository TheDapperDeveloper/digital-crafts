ramit = {
  'name': 'Ramit',
  'email': 'ramit@gmail.com',
  'interests': ['movies', 'tennis'],
  'friends': [
    {
      'name': 'Jasmine',
      'email': 'jasmine@yahoo.com',
      'interests': ['photography', 'tennis']
    },
    {
      'name': 'Jan',
      'email': 'jan@hotmail.com',
      'interests': ['movies', 'tv']
    }
  ]
}

#Write a python expression that gets the email address of Ramit.

print(ramit['email'])

#Write a python expression that gets the first of Ramit's interests.

print(ramit['interests'][0])

#Write a python expression that gets the email address of Jasmine.
print(ramit.get('friends')[0]['email'])

#Write a python expression that gets the second of Jan's two interests.
print(ramit.get('friends')[1]['interests'][1])