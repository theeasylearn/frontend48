import React from 'react';
import ReactDOM from 'react-dom/client';
//THIS IS COMMENT
const root = ReactDOM.createRoot(document.getElementById('root'));
var schedule = (<div className='container'>
    {/* this is comment inside JSX */}
    <div className="row">
        <div className="col-12">
            <div className="card shadow">
                <div className="card-body">
                    <table className='table  table-striped table-sm'>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Time (IST)</th>
                                <th>Match</th>
                                <th>Stage</th>
                                <th>Venue</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th colspan="5">Group Stage: February 7 - February 20</th>
                            </tr>
                            <tr>
                                <td>Sat, Feb 7</td>
                                <td>11:00 AM</td>
                                <td>Pakistan vs Netherlands</td>
                                <td>Group A</td>
                                <td>SSC, Colombo</td>
                            </tr>
                            <tr>
                                <td>Sat, Feb 7</td>
                                <td>3:00 PM</td>
                                <td>West Indies vs Bangladesh</td>
                                <td>Group C</td>
                                <td>Kolkata</td>
                            </tr>
                            <tr>
                                <td>Sat, Feb 7</td>
                                <td>7:00 PM</td>
                                <td>India vs USA</td>
                                <td>Group A</td>
                                <td>Mumbai</td>
                            </tr>
                            <tr>
                                <td>Sun, Feb 8</td>
                                <td>11:00 AM</td>
                                <td>New Zealand vs Afghanistan</td>
                                <td>Group D</td>
                                <td>Chennai</td>
                            </tr>
                            <tr>
                                <td>Sun, Feb 8</td>
                                <td>3:00 PM</td>
                                <td>England vs Nepal</td>
                                <td>Group C</td>
                                <td>Mumbai</td>
                            </tr>
                            <tr>
                                <td>Sun, Feb 8</td>
                                <td>7:00 PM</td>
                                <td>Sri Lanka vs Ireland</td>
                                <td>Group B</td>
                                <td>P. Colombo</td>
                            </tr>
                            <tr>
                                <td>Mon, Feb 9</td>
                                <td>11:00 AM</td>
                                <td>Bangladesh vs Italy</td>
                                <td>Group C</td>
                                <td>Kolkata</td>
                            </tr>
                            <tr>
                                <td>Mon, Feb 9</td>
                                <td>3:00 PM</td>
                                <td>Zimbabwe vs Oman</td>
                                <td>Group B</td>
                                <td>SSC, Colombo</td>
                            </tr>
                            <tr>
                                <td>Mon, Feb 9</td>
                                <td>7:00 PM</td>
                                <td>South Africa vs Canada</td>
                                <td>Group D</td>
                                <td>Ahmedabad</td>
                            </tr>
                            <tr>
                                <td>Tue, Feb 10</td>
                                <td>11:00 AM</td>
                                <td>Netherlands vs Namibia</td>
                                <td>Group A</td>
                                <td>Delhi</td>
                            </tr>
                            <tr>
                                <td>Tue, Feb 10</td>
                                <td>3:00 PM</td>
                                <td>New Zealand vs UAE</td>
                                <td>Group D</td>
                                <td>Chennai</td>
                            </tr>
                            <tr>
                                <td>Tue, Feb 10</td>
                                <td>7:00 PM</td>
                                <td>Pakistan vs USA</td>
                                <td>Group A</td>
                                <td>SSC, Colombo</td>
                            </tr>
                            <tr>
                                <td>Wed, Feb 11</td>
                                <td>11:00 AM</td>
                                <td>South Africa vs Afghanistan</td>
                                <td>Group D</td>
                                <td>Ahmedabad</td>
                            </tr>
                            <tr>
                                <td>Wed, Feb 11</td>
                                <td>3:00 PM</td>
                                <td>Australia vs Ireland</td>
                                <td>Group B</td>
                                <td>P. Colombo</td>
                            </tr>
                            <tr>
                                <td>Wed, Feb 11</td>
                                <td>7:00 PM</td>
                                <td>England vs West Indies</td>
                                <td>Group C</td>
                                <td>Mumbai</td>
                            </tr>
                            <tr>
                                <td>Thu, Feb 12</td>
                                <td>11:00 AM</td>
                                <td>Sri Lanka vs Oman</td>
                                <td>Group B</td>
                                <td>Kandy</td>
                            </tr>
                            <tr>
                                <td>Thu, Feb 12</td>
                                <td>3:00 PM</td>
                                <td>Nepal vs Italy</td>
                                <td>Group C</td>
                                <td>Mumbai</td>
                            </tr>
                            <tr>
                                <td>Thu, Feb 12</td>
                                <td>7:00 PM</td>
                                <td>India vs Namibia</td>
                                <td>Group A</td>
                                <td>Delhi</td>
                            </tr>
                            <tr>
                                <td>Fri, Feb 13</td>
                                <td>11:00 AM</td>
                                <td>Australia vs Zimbabwe</td>
                                <td>Group B</td>
                                <td>P. Colombo</td>
                            </tr>
                            <tr>
                                <td>Fri, Feb 13</td>
                                <td>3:00 PM</td>
                                <td>Canada vs UAE</td>
                                <td>Group D</td>
                                <td>Delhi</td>
                            </tr>
                            <tr>
                                <td>Fri, Feb 13</td>
                                <td>7:00 PM</td>
                                <td>USA vs Netherlands</td>
                                <td>Group A</td>
                                <td>Chennai</td>
                            </tr>
                            <tr>
                                <td>Sat, Feb 14</td>
                                <td>11:00 AM</td>
                                <td>Ireland vs Oman</td>
                                <td>Group B</td>
                                <td>SSC, Colombo</td>
                            </tr>
                            <tr>
                                <td>Sat, Feb 14</td>
                                <td>3:00 PM</td>
                                <td>England vs Bangladesh</td>
                                <td>Group C</td>
                                <td>Kolkata</td>
                            </tr>
                            <tr>
                                <td>Sat, Feb 14</td>
                                <td>7:00 PM</td>
                                <td>New Zealand vs South Africa</td>
                                <td>Group D</td>
                                <td>Ahmedabad</td>
                            </tr>
                            <tr>
                                <td>Sun, Feb 15</td>
                                <td>11:00 AM</td>
                                <td>West Indies vs Nepal</td>
                                <td>Group C</td>
                                <td>Mumbai</td>
                            </tr>
                            <tr>
                                <td>Sun, Feb 15</td>
                                <td>3:00 PM</td>
                                <td>USA vs Namibia</td>
                                <td>Group A</td>
                                <td>Chennai</td>
                            </tr>
                            <tr>
                                <td>Sun, Feb 15</td>
                                <td>7:00 PM</td>
                                <td>India vs Pakistan</td>
                                <td>Group A</td>
                                <td>P. Colombo</td>
                            </tr>
                            <tr>
                                <td>Mon, Feb 16</td>
                                <td>11:00 AM</td>
                                <td>Afghanistan vs UAE</td>
                                <td>Group D</td>
                                <td>Delhi</td>
                            </tr>
                            <tr>
                                <td>Mon, Feb 16</td>
                                <td>3:00 PM</td>
                                <td>England vs Italy</td>
                                <td>Group C</td>
                                <td>Kolkata</td>
                            </tr>
                            <tr>
                                <td>Mon, Feb 16</td>
                                <td>7:00 PM</td>
                                <td>Australia vs Sri Lanka</td>
                                <td>Group B</td>
                                <td>Kandy</td>
                            </tr>
                            <tr>
                                <td>Tue, Feb 17</td>
                                <td>11:00 AM</td>
                                <td>New Zealand vs Canada</td>
                                <td>Group D</td>
                                <td>Chennai</td>
                            </tr>
                            <tr>
                                <td>Tue, Feb 17</td>
                                <td>3:00 PM</td>
                                <td>Ireland vs Zimbabwe</td>
                                <td>Group B</td>
                                <td>Kandy</td>
                            </tr>
                            <tr>
                                <td>Tue, Feb 17</td>
                                <td>7:00 PM</td>
                                <td>Bangladesh vs Nepal</td>
                                <td>Group C</td>
                                <td>Mumbai</td>
                            </tr>
                            <tr>
                                <td>Wed, Feb 18</td>
                                <td>11:00 AM</td>
                                <td>South Africa vs UAE</td>
                                <td>Group D</td>
                                <td>Delhi</td>
                            </tr>
                            <tr>
                                <td>Wed, Feb 18</td>
                                <td>3:00 PM</td>
                                <td>Pakistan vs Namibia</td>
                                <td>Group A</td>
                                <td>SSC, Colombo</td>
                            </tr>
                            <tr>
                                <td>Wed, Feb 18</td>
                                <td>7:00 PM</td>
                                <td>India vs Netherlands</td>
                                <td>Group A</td>
                                <td>Ahmedabad</td>
                            </tr>
                            <tr>
                                <td>Thu, Feb 19</td>
                                <td>11:00 AM</td>
                                <td>West Indies vs Italy</td>
                                <td>Group C</td>
                                <td>Kolkata</td>
                            </tr>
                            <tr>
                                <td>Thu, Feb 19</td>
                                <td>3:00 PM</td>
                                <td>Sri Lanka vs Zimbabwe</td>
                                <td>Group B</td>
                                <td>P. Colombo</td>
                            </tr>
                            <tr>
                                <td>Thu, Feb 19</td>
                                <td>7:00 PM</td>
                                <td>Afghanistan vs Canada</td>
                                <td>Group D</td>
                                <td>Chennai</td>
                            </tr>
                            <tr>
                                <td>Fri, Feb 20</td>
                                <td>7:00 PM</td>
                                <td>Australia vs Oman</td>
                                <td>Group B</td>
                                <td>Kandy</td>
                            </tr>

                            <tr>
                                <th colspan="5">Super Eight Stage: February 21 - March 1</th>
                            </tr>
                            <tr>
                                <td>Sat, Feb 21</td>
                                <td>7:00 PM</td>
                                <td>Y2 vs Y3</td>
                                <td>Super 8</td>
                                <td>P. Colombo</td>
                            </tr>
                            <tr>
                                <td>Sun, Feb 22</td>
                                <td>3:00 PM</td>
                                <td>Y1 vs Y4</td>
                                <td>Super 8</td>
                                <td>Kandy</td>
                            </tr>
                            <tr>
                                <td>Sun, Feb 22</td>
                                <td>7:00 PM</td>
                                <td>X1 vs X4</td>
                                <td>Super 8</td>
                                <td>Ahmedabad</td>
                            </tr>
                            <tr>
                                <td>Mon, Feb 23</td>
                                <td>7:00 PM</td>
                                <td>X2 vs X3</td>
                                <td>Super 8</td>
                                <td>Mumbai</td>
                            </tr>
                            <tr>
                                <td>Tue, Feb 24</td>
                                <td>7:00 PM</td>
                                <td>Y1 vs Y3</td>
                                <td>Super 8</td>
                                <td>Kandy</td>
                            </tr>
                            <tr>
                                <td>Wed, Feb 25</td>
                                <td>7:00 PM</td>
                                <td>Y2 vs Y4</td>
                                <td>Super 8</td>
                                <td>P. Colombo</td>
                            </tr>
                            <tr>
                                <td>Thu, Feb 26</td>
                                <td>3:00 PM</td>
                                <td>X3 vs X4</td>
                                <td>Super 8</td>
                                <td>Ahmedabad</td>
                            </tr>
                            <tr>
                                <td>Thu, Feb 26</td>
                                <td>7:00 PM</td>
                                <td>X1 vs X2</td>
                                <td>Super 8</td>
                                <td>Chennai</td>
                            </tr>
                            <tr>
                                <td>Fri, Feb 27</td>
                                <td>7:00 PM</td>
                                <td>Y1 vs Y2</td>
                                <td>Super 8</td>
                                <td>P. Colombo</td>
                            </tr>
                            <tr>
                                <td>Sat, Feb 28</td>
                                <td>7:00 PM</td>
                                <td>Y3 vs Y4</td>
                                <td>Super 8</td>
                                <td>Kandy</td>
                            </tr>
                            <tr>
                                <td>Sun, Mar 1</td>
                                <td>3:00 PM</td>
                                <td>X2 vs X4</td>
                                <td>Super 8</td>
                                <td>Delhi</td>
                            </tr>
                            <tr>
                                <td>Sun, Mar 1</td>
                                <td>7:00 PM</td>
                                <td>X1 vs X3</td>
                                <td>Super 8</td>
                                <td>Kolkata</td>
                            </tr>

                            <tr>
                                <th colspan="5">Knockout Stage: March 4 - March 8</th>
                            </tr>
                            <tr>
                                <td>Wed, Mar 4</td>
                                <td>7:00 PM</td>
                                <td>Semi-final 1</td>
                                <td>SF</td>
                                <td>Kolkata **OR** P. Colombo*</td>
                            </tr>
                            <tr>
                                <td>Thu, Mar 5</td>
                                <td>7:00 PM</td>
                                <td>Semi-final 2</td>
                                <td>SF</td>
                                <td>Mumbai</td>
                            </tr>
                            <tr>
                                <td>Sun, Mar 8</td>
                                <td>7:00 PM</td>
                                <td>Final</td>
                                <td>Final</td>
                                <td>Ahmedabad **OR** P. Colombo*</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>)
root.render(schedule);
