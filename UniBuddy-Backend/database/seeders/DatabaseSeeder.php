<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\User;
use App\Models\Campus;
use App\Models\Place;
use App\Models\Review;
use App\Models\Comment;
use App\Models\Forum;
use App\Models\ForumTag;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        srand(07102023);

        User::insert([
            [
                'username' => 'vinchi',
                'email' => 'kevin@mail.com',
                'password' => 'default123',
                'date_of_birth' => '2003-01-01',
                'campus_name' => 'Bina Nusantara University'
            ],
            [
                'username' => 'tum',
                'email' => 'tumewu@mail.com',
                'password' => 'default123',
                'date_of_birth' => '2003-01-01',
                'campus_name' => 'Bina Nusantara University'
            ],
            [
                'username' => 'dix',
                'email' => 'dixon@mail.com',
                'password' => 'default123',
                'date_of_birth' => '2003-01-01',
                'campus_name' => 'Bina Nusantara University'
            ],
            [
                'username' => 'tin',
                'email' => 'dastin@mail.com',
                'password' => 'default123',
                'date_of_birth' => '2003-01-01',
                'campus_name' => 'Bina Nusantara University'
            ],
            [
                'username' => 'gav',
                'email' => 'gavriel@mail.com',
                'password' => 'default123',
                'date_of_birth' => '2003-01-01',
                'campus_name' => 'Bina Nusantara University'
            ]
        ]);

        Campus::create([
            'name' => 'Bina Nusantara University',
            'location' => '',
            'domicile' => 'Jakarta Barat'
        ]);

        Place::insert([
            [
                'campus_id' => '1',
                'name' => 'Kuali',
                'brief_description' => 'Homecook Dishes',
                'description' => 'Kuali adalah sebuah restoran yang menghadirkan pengalaman kuliner yang luar biasa dengan berbagai hidangan autentik yang menggugah selera. Restoran ini dikenal karena menu makanannya yang penuh dengan cita rasa dan keunikan. Setiap hidangan disajikan dengan penuh kreativitas dan perhatian terhadap detail.\nInterior restoran Kuali menciptakan suasana yang hangat dan mengundang. Dinding-dindingnya dihiasi dengan seni-seni tradisional yang mencerminkan budaya dan warisan kuliner yang kaya. Suasana yang nyaman ini membuatnya menjadi tempat yang sempurna untuk pertemuan keluarga, teman-teman, atau bahkan acara khusus.\nMenu Kuali mencakup beragam hidangan dari berbagai masakan, seperti masakan lokal yang autentik, hidangan Asia, dan internasional. Beberapa hidangan khas yang sangat direkomendasikan di restoran ini termasuk kari yang kaya rempah, gulai lezat, nasi goreng yang menggugah selera, dan berbagai jenis hidangan tahu dan tempe yang menggoda.\nSelain hidangan utama, Kuali juga menawarkan berbagai minuman segar dan pencuci mulut yang cocok untuk melengkapi pengalaman makan Anda. Pelayanan yang ramah dan profesional dari staf restoran akan memastikan Anda merasa dihargai dan diberikan perhatian yang pantas.\nDengan kombinasi cita rasa yang luar biasa, suasana yang nyaman, dan pilihan menu yang beragam, Kuali adalah tempat yang sempurna untuk merayakan cita rasa kuliner yang beragam dan memuaskan selera Anda. Ini adalah destinasi makan yang tak boleh dilewatkan bagi pecinta masakan autentik dan pencinta makanan yang mencari pengalaman kuliner yang istimewa.',
                'type' => 'Restaurant',
                'gofood_link' => 'https://gofood.co.id/jakarta/restaurant/kuali-palmerah-61ae8708-424f-4840-b57e-82269e245be9',
                'gmaps_link' => 'https://maps.app.goo.gl/syLUMLmQef2iZ587A'
            ]
        ]);

        for($i = 1; $i <= 5; $i++)
        {
            Review::create([
                'place_id' => '1',
                'user_id' => $i,
                'date' => date('Y-m-d'),
                'review_text' => 'Hello this is review',
                'star_rate' => rand(0, 5)
            ]);

            Comment::create([
                'place_id' => '1',
                'user_id' => $i,
                'date' => date('Y-m-d'),
                'comment_text' => 'This is some comment'
            ]);

            Forum::create([
                'user_id' => $i,
                'date' => date('Y-m-d'),
                'forum_text' => 'Apa yang terjadi ketika bumi itu datar?'
            ]);
        }




        $tags = ['Food', 'Health', 'Place to go'];

        for($i = 1; $i <= 5; $i++)
        {
            $tagCount = rand(1, count($tags));

            for($j = 0; $j < $tagCount; $j++)
            {
                ForumTag::create([
                    'forum_id' => $i,
                    'tag' => $tags[$j]
                ]);
            }
        }
    }
}
