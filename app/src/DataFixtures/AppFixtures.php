<?php

namespace App\DataFixtures;

use App\Entity\Comment;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $faker = Factory::create();

        for ($i = 0; $i < 5; $i++) {
            $comment = new Comment();
            $comment->setEmail($faker->email);
            $comment->setText($faker->text);
            $manager->persist($comment);
        }

        $manager->flush();
    }
}
