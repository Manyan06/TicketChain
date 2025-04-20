app.get('/api/events', (req, res) => {
  const events = [
      {
          _id: '1',
          title: 'Music Fest 2025',
          date: '2025-05-01',
          location: 'LA',
          price: 50,
          availableTickets: 100
      },
      
  ];

  res.json({ message: 'List of events', events});
});
