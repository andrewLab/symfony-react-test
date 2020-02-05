<?php

namespace App\Controller;

use App\Entity\Comment;
use App\Repository\CommentRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;

class CommentController extends AbstractController
{
    private $commentRepository;

    public function __construct(CommentRepository $commentRepository)
    {
        $this->commentRepository = $commentRepository;
    }

    /**
     * @Route("/comment/list", name="list_comments", methods={"GET"})
     * @return JsonResponse
     */
    public function list(): JsonResponse
    {
        $comments = $this->commentRepository->findAll();
        $data = array_map(function (Comment $comment) {
            return $comment->toArray();
        }, $comments);

        return new JsonResponse($data, Response::HTTP_OK);
    }

    /**
     * @Route("/comment", name="store_comment", methods={"POST", "OPTIONS"})
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $email = $data['email'];
        $text = $data['text'];

        if (empty($email) || empty($text)) {
            throw new NotFoundHttpException('Expecting mandatory parameters!');
        }

        $this->commentRepository->createComment($email, $text);

        return new JsonResponse(['status' => 'Comment created!'], Response::HTTP_CREATED);
    }
}
