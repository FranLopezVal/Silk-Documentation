import { Component } from '@angular/core';
import { CodeBlockComponent } from '../../../../components/code-block/code-block.component';

@Component({
  selector: 'app-routing-docs',
  standalone: true,
  imports: [CodeBlockComponent],
  templateUrl: './routing.component.html'
})
export class RoutingDocsComponent {
  code_01 = 
`
  [Get("/users/info/:username")]
  public static Response GET_TEST(Request req)
  {
      var param = req.UrlParams["username"];
      return Response.CreateHtmlResponse($"<h1>UserName: {param}</h1>");
  }
`;

  code_02 =
`
  SilkServer silkServer = new SilkServer();
  silkServer.RouterManager.AddRoute(new Route("/custom/path"), functionHander);
`;

  code_03 = 
`
  AddRoute(Route, Func<Response,Request> handler)
`;
}
