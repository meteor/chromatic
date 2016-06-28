/* global Typography:true */
/* global React */
import React from 'react';

const {Chromatic} = Package['mdg:chromatic-api'] || {};

Typography = React.createClass({
  render() {
    return (
      <div className="section-content">
        <div className="typefaces">
          <div className="column">
            <h6>Typeface</h6>
            <div className="font-m1">Source Sans Pro</div>
          </div>
          <div className="column">
            <h6>Weights</h6>
            <div className="font-m1 type-light">300</div>
            <div className="font-m1 type-normal">400</div>
            <div className="font-m1 type-italic">400i</div>
            <div className="font-m1 type-semibold">600</div>
            <div className="font-m1 type-bold">700</div>
          </div>
        </div>

        <hr/>

        <div className="heading column">
          <div><h6>x1 - 56/56</h6><div className="font-x1">Wild Blue</div></div>
          <div><h6>l3 - 48/48</h6><div className="font-l3">Transcend</div></div>
          <div><h6>l2 - 40/40</h6><div className="font-l2">Longest</div></div>
          <div><h6>l1 - 32/32</h6><div className="font-l1">Journey</div></div>
          <div><h6>m3 - 28/28</h6><div className="font-m3">Begins</div></div>
          <div><h6>m2 - 24/24</h6><div className="font-m2">With</div></div>
          <div><h6>m1 - 20/20</h6><div className="font-m1">One</div></div>
          <div><h6>s3 - 16/24</h6><div className="font-s3">Small</div></div>
          <div><h6>s2 - 14/20</h6><div className="font-s2">Step</div></div>
          <div><h6>s1 - 12/16</h6><div className="font-s1">Unknown</div></div>
        </div>

        <div className="body column">
          <div>
            <h6>16/24</h6>
            <div className="font-s3"><em>Body</em> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.</div>
          </div>
          <div>
            <h6>14/20</h6>
            <div className="font-s2"><em>Body</em> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</div>
          </div>
          <div>
            <h6>12/16</h6>
            <div className="font-s1"><em>Body</em> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</div>
          </div>
        </div>
      </div>
    );
  }
});

Chromatic.addStyle('typography', ['font-m1', 'font-x1', 'font-l1', 'font-l2', 'font-l3', 'font-m2', 'font-m3', 'font-s1', 'font-s2', 'font-s3', 'type-light', 'type-bold', 'type-semibold', 'type-italic', 'type-normal'])

