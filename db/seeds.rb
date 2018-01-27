# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
1.times { Post.create!(title: "Post 1", article: "I don't know why I was trying to do this with Node.js when Rails is more me and is actually in the stack") }

1.times { Post.create!(title: "Thought 1", article: "In the fire it was you and I but in the ashes I stood alone.") }
1.times { Post.create!(title: "Post 2", article: "Seriously though... I would have been faster if I didn't always learn new stuff with node") }
1.times { Post.create!(title: "Sleep Better", article: "Do you sleep better with the lights off where you can't see your fears? Or do you still hear your cries in your ears?") }
1.times { Post.create!(title: "We Start The Fire", article: "Cause we can hold on to tonight and this moment forever.") }
1.times { Post.create!(title: "React Log", article: "Now that I'm almost done with this... I think I figured out how I should have done it in the first place...yeah.") }
1.times { Post.create!(title: "Colors", article: "I’m out of my mind
                                                I’m running out of time
                                                I’m searching these signs
                                                For serenity
                                                
                                                I’m blinded by lights
                                                From chasing these highs
                                                I color in the lines
                                                For some clarity
                                                
                                                And the colors start to fade
                                                I guess it’s just the season
                                                
                                                And we can lose the way
                                                Cause love is just the reason
                                                We need to be afraid
                                                ") }
                                                