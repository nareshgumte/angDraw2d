import { AfterViewInit, Component } from '@angular/core';
import * as draw2d from 'draw2d';
import * as $ from 'jquery';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
	title = 'ang10';
	public canvas: any;
	constructor() {
		// 
	}
	ngAfterViewInit() {
		this.canvas = new draw2d.Canvas("gfx_holder");

		var createConnection = function () {
			var con = new draw2d.Connection();
			con.setRouter(new draw2d.layout.connection.ManhattanConnectionRouter());
			return con;
		};

		this.canvas.installEditPolicy(
			new draw2d.policy.connection.ClickConnectionCreatePolicy({
				createConnection: createConnection
			}),
		);
		this.canvas.installEditPolicy(
			new draw2d.policy.canvas.ShowGridEditPolicy(20),
		);

		this.canvas.setScrollArea($(window));


		var rect1 = new draw2d.shape.basic.Rectangle({ x: 50, y: 50, width: 120, height: 20, bgColor: '#3366FF', maxHeight: 50 });
		var textFig1 = new draw2d.shape.basic.Label({ text: 'Task-1', stroke: 0 });

		var rect2 = new draw2d.shape.basic.Rectangle({ x: 50, y: 100, width: 120, height: 20, bgColor: '#3366FF' });
		var textFig2 = new draw2d.shape.basic.Label({ text: 'Task-2', stroke: 0 });

		var rect3 = new draw2d.shape.basic.Rectangle({ x: 50, y: 150, width: 120, height: 20, bgColor: '#3366FF' });
		var textFig3 = new draw2d.shape.basic.Label({ text: 'Task-3', stroke: 0 });

		var rect4 = new draw2d.shape.basic.Rectangle({ x: 50, y: 200, width: 120, height: 20, bgColor: '#3366FF' });
		var textFig4 = new draw2d.shape.basic.Label({ text: 'Task-4', stroke: 0 });


		rect1.createPort("input", new draw2d.layout.locator.LeftLocator(rect1));
		rect1.createPort("output", new draw2d.layout.locator.RightLocator(rect1));
		rect1.add(textFig1, new draw2d.layout.locator.CenterLocator(rect1));
		this.canvas.add(rect1);



		rect2.createPort("input", new draw2d.layout.locator.LeftLocator(rect2));
		rect2.createPort("output", new draw2d.layout.locator.RightLocator(rect2));
		rect2.add(textFig2, new draw2d.layout.locator.CenterLocator(rect2));
		this.canvas.add(rect2);

		rect3.createPort("input", new draw2d.layout.locator.LeftLocator(rect3));
		rect3.createPort("output", new draw2d.layout.locator.RightLocator(rect3));
		rect3.add(textFig3, new draw2d.layout.locator.CenterLocator(rect3));
		this.canvas.add(rect3);

		rect4.createPort("input", new draw2d.layout.locator.LeftLocator(rect4));
		rect4.createPort("output", new draw2d.layout.locator.RightLocator(rect4));
		rect4.add(textFig4, new draw2d.layout.locator.CenterLocator(rect4));
		this.canvas.add(rect4);

		rect1.installEditPolicy(
			new draw2d.policy.figure.HorizontalEditPolicy()
		);
		rect2.installEditPolicy(new draw2d.policy.figure.HorizontalEditPolicy());
		rect3.installEditPolicy(new draw2d.policy.figure.HorizontalEditPolicy());
		rect4.installEditPolicy(new draw2d.policy.figure.HorizontalEditPolicy());
	}
}
