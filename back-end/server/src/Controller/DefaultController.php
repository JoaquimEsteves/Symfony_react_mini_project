<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="default")
     */
    public function index()
    {
        return new Response(
            "<html>
                <body>
                    Hello there, I'm a public API! I return json objects like so:
                    <a
                    rel='noopener noreferrer' target='_blank'
                    href='/api/users'> Click me!</a>
                </body>
            </html>"
        );
    }
}
